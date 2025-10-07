import React, { useState, useMemo } from 'react';
import { Button } from './common/Button';

interface DataTableProps {
    data: any[];
    columns: string[];
    tableName: string;
    onAddRecord: () => void;
}

const ROWS_PER_PAGE = 10;

const TableHeader: React.FC<{ headers: string[] }> = ({ headers }) => (
    <thead className="bg-base-300">
        <tr>
            {headers.map(header => (
                <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-bold text-text-light uppercase tracking-wider">
                    {header.replace(/_/g, ' ')}
                </th>
            ))}
        </tr>
    </thead>
);

const TableRow: React.FC<{ item: any; columns: string[] }> = ({ item, columns }) => (
    <tr className="even:bg-base-200/50">
        {columns.map(column => (
            <td key={column} className="px-6 py-4 whitespace-nowrap text-sm text-text-light">
                {typeof item[column] === 'boolean' ? (item[column] ? 
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Yes</span> : 
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">No</span>
                    ) : String(item[column] === null ? 'N/A' : item[column])}
            </td>
        ))}
    </tr>
);

export const DataTable: React.FC<DataTableProps> = ({ data, columns, tableName, onAddRecord }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredData = useMemo(() => {
        return data.filter(item => 
            columns.some(column => 
                String(item[column]).toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [data, columns, searchTerm]);

    const totalPages = Math.ceil(filteredData.length / ROWS_PER_PAGE);
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
        return filteredData.slice(startIndex, startIndex + ROWS_PER_PAGE);
    }, [filteredData, currentPage]);
    
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
                 <input
                    type="text"
                    placeholder={`Search in ${tableName}...`}
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1); // Reset to first page on search
                    }}
                    className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-base-100"
                />
                <Button onClick={onAddRecord} variant="secondary">
                    Add New {tableName}
                </Button>
            </div>
            
            <div className="table-responsive shadow-md sm:rounded-lg border border-gray-200/80">
                <table className="min-w-full divide-y divide-gray-200">
                    <TableHeader headers={columns} />
                    <tbody className="bg-base-100 divide-y divide-gray-200">
                        {paginatedData.length > 0 ? (
                            paginatedData.map((item, index) => (
                                <TableRow key={index} item={item} columns={columns} />
                            ))
                        ) : (
                             <tr>
                                <td colSpan={columns.length} className="text-center py-10 px-6 text-text-light">
                                    No records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-text-light">
                        Page {currentPage} of {totalPages}
                    </span>
                    <div className="space-x-2">
                        <Button onClick={handlePrevPage} disabled={currentPage === 1} variant="outline">Previous</Button>
                        <Button onClick={handleNextPage} disabled={currentPage === totalPages} variant="outline">Next</Button>
                    </div>
                </div>
            )}
        </div>
    );
};