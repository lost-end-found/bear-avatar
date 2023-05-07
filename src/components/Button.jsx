import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Spinner } from '@chakra-ui/react'

const baseStyles = {
  solid:
    'inline-flex justify-center items-center rounded-lg  font-semibold outline-2 outline-offset-2 transition-colors border-2 border-transparent',
  outline:
    'inline-flex justify-center items-center rounded-lg border-2 outline-2 outline-offset-2 transition-colors font-semibold',
}

const sizeStyles = {
  sm: 'py-1 px-2 text-sm',
  base: 'py-2 px-3',
}

const variantStyles = {
  solid: {
    purple: 'relative overflow-hidden bg-purple-700 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-purple-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-purple-900 hover:bg-white/90 active:bg-white/90 active:text-purple-900/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
    purple: 'border-purple-500 hover:border-purple-400 active:bg-purple-100 active:text-purple-700/80',
  },
}

export const Button = forwardRef(function Button(
  { variant = 'solid', size = 'base', color = 'purple', isLoading=false, className, href, ...props },
  ref
) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    sizeStyles[size],
    className
  )
  return isLoading ? () => <Spinner /> : href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  )
})
