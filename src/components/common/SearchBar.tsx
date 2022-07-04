import React, { FC, memo } from 'react'
import cx from 'classnames'

const SearchBar: FC<{
  placeholder?: string
  value: string
  className?: string
  onChange: (value: string) => void
}> = ({ placeholder = 'Search..', value, className, onChange }) => {
  return (
    <div className={cx('border-2 border-primary rounded-xl px-2 py-1 bg-secondary', className)}>
      <input
        className="w-full bg-transparent text-pink-50 text-xl"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default memo(SearchBar)
