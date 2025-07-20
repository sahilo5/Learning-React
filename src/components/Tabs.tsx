import React, { 
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
  Children,
  isValidElement,
  cloneElement 
} from "react";

// TabProps
type TabProps = {
  index: number;
  label: string;
  children: ReactNode;
};

type TabsProps = {
  defaultIndex?: number;
  children: ReactNode;
};

const TabsContext = createContext<{
  activeIndex: number;
  setActiveIndex: (index: number) => void;
} | null>(null);

// Tabs
export const Tabs: React.FC<TabsProps> = ({ defaultIndex = 0, children }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const validChildren = Children.toArray(children).filter(isValidElement) as ReactElement<TabProps>[];

  const labels = validChildren.map((child) => ({
    index: child.props.index,
    label: child.props.label,
  }));

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="w-full">
        {/* Tab Buttons */}
        <div className="flex space-x-4 border-b border-light mb-4">
          {labels.map(({ index, label }) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 text-sm font-medium ${
                activeIndex === index
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {validChildren.map((child) =>
            child.props.index === activeIndex ? cloneElement(child) : null
          )}
        </div>
      </div>
    </TabsContext.Provider>
  );
};

// Tab Component
export const Tab: React.FC<TabProps> = ({ children }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("<Tab> must be used inside <Tabs>");
  return <>{children}</>;
};
