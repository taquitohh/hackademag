import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextType {
  filterTag: string | null;
  searchQuery: string;
  setFilterTag: (tag: string | null) => void;
  setSearchQuery: (query: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filterTag, setFilterTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <FilterContext.Provider value={{ filterTag, searchQuery, setFilterTag, setSearchQuery }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};