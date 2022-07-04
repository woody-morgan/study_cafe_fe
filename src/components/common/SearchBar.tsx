import React, { FC, memo } from 'react'
import cx from 'classnames'

const SearchBar: FC<{
  placeholder?: string
  value: string
  className?: string
  onChange: (e) => void
}> = ({ placeholder = 'Search..', value, className, onChange }) => {
  return (
    <div className={cx('border-2 border-primary rounded-xl px-2 py-1 bg-secondary', className)}>
      <input
        className="w-full bg-transparent text-primary text-xl outline-0"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}

export default memo(SearchBar)
