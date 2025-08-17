import React from 'react';
import { Filter, X } from 'lucide-react';
import { FilterState } from '../../types';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  isOpen: boolean;
  onToggle: () => void;
  categories: any[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  isOpen,
  onToggle,
  categories
}) => {
  const handleCategoryChange = (categoryId: string) => {
    onFilterChange({
      ...filters,
      category: filters.category === categoryId ? '' : categoryId
    });
  };

  const clearFilters = () => {
    onFilterChange({
      category: '',
      search: ''
    });
  };

  return (
    <>
      <button
        onClick={onToggle}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-[#11B3BC] text-white p-3 rounded-full shadow-lg hover:bg-[#2E59A7] transition-colors duration-200"
      >
        <Filter className="w-6 h-6" />
      </button>

      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-[#2E59A7]/50 z-30"
          onClick={onToggle}
        />
      )}

      <div className={`
        fixed lg:sticky top-0 left-0 h-full lg:h-auto w-80 lg:w-auto bg-white z-40 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:transform-none lg:shadow-none shadow-xl
      `}>
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-6 lg:mb-4">
            <h3 className="text-lg font-bold text-[#2E59A7] flex items-center">
              <Filter className="w-5 h-5 mr-2 text-[#11B3BC]" />
              Filters
            </h3>
            <button
              onClick={onToggle}
              className="lg:hidden p-2 text-[#2E59A7] hover:text-[#11B3BC]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {(filters.category || filters.search) && (
            <button
              onClick={clearFilters}
              className="w-full mb-6 px-4 py-2 text-sm text-[#11B3BC] border border-[#11B3BC] rounded-xl hover:bg-[#11B3BC]/10 font-bold transition-colors duration-200"
            >
              Clear All Filters
            </button>
          )}

          <div className="space-y-4">
            <h4 className="font-bold text-[#2E59A7]">Categories</h4>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.category === category.id}
                    onChange={() => handleCategoryChange(category.id)}
                    className="w-4 h-4 text-[#11B3BC] rounded focus:ring-[#11B3BC] border-[#2E59A7]/20"
                  />
                  <span className="text-[#2E59A7] font-bold">{category.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;