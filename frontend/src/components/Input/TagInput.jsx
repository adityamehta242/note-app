import React, { useState } from 'react';
import { MdAdd, MdClose } from 'react-icons/md'; // Import MdClose

function TagInput({ tags, setTags }) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addNewTag = () => {
        if (inputValue.trim() !== "") {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addNewTag();
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    return (
        <div>
            {tags?.length > 0 && (
                <div className='flex items-center gap-2 flex-wrap mt-2'>
                    {tags.map((tag, index) => (
                        <span key={index} className='flex items-center gap-2 text-xs text-slate-900 bg-slate-200 rounded px-3 py-1'>
                            #{tag}
                            <button
                                onClick={() => {
                                    handleRemoveTag(tag); // Pass the tag to remove
                                }}
                            >
                                <MdClose />
                            </button>
                        </span>
                    ))}
                </div>
            )}

            <div className='flex items-center gap-4 mt-3'>
                <input
                    type="text"
                    className='text-sm bg-transparent rounded-md border outline-none px-3 py-2'
                    placeholder='Add tags'
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    value={inputValue} // Controlled input
                />

                <button
                    className='w-8 h-8 flex items-center justify-center rounded border border-blue-700 hover:bg-blue-700'
                    onClick={addNewTag} // Use onClick instead of onChange
                >
                    <MdAdd className='text-xl text-blue-700 hover:text-white' />
                </button>
            </div>
        </div>
    );
}

export default TagInput;
