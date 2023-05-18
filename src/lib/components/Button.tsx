type ButtonProps = {
    as?: "button" | "a",
    children: React.ReactNode,
    style?: "primary" | "secondary" | "soft" | "danger" | "warning" | "success",
    size?: "xs" | "sm" | "md" | "lg" | "xl",
    divided?: boolean,
    className?: string,
}

export default function Button({as = "button", children, style, size, divided = false, className = "", ...props}: ButtonProps) {

    const Tag = as === "a" ? "a" : "button";

    const tagStyles = {
        a: "inline-block",
        button: "inline-flex items-center justify-center"
    }

    const styles = {
        primary: "rounded bg-indigo-600 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        secondary: "rounded bg-white font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
        soft: "rounded bg-indigo-50 font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100",
        danger: "rounded bg-red-600 font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
        warning: "rounded bg-yellow-600 font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600",
        success: "rounded bg-green-600 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600",
    }

    const sizes = {
        xs: "px-2 py-1 text-xs",
        sm: "px-2 py-1 text-sm",
        md: "px-2.5 py-1.5 text-sm",
        lg: "px-3 py-2 text-sm",
        xl: "px-3.5 py-2.5 text-sm"
    }

    const dividers = {
        primary: "divide-x divide-indigo-100",
        secondary: "divide-x divide-gray-200",
        soft: "divide-x divide-indigo-100",
        danger: "divide-x divide-red-100",
        warning: "divide-x divide-yellow-100",
        success: "divide-x divide-green-100",
    }

    // If the button is divided we add a separator and apply styles to the first and 2nd child
    if (divided) {
        className += " !p-0 " + (dividers[style] || dividers.primary);
        children = [
            <span className={`${sizes[size] || sizes.md }`} key={0}>{children[0]}</span>,
            <span className={`${sizes[size] || sizes.md }`} key={1}>{children[1]}</span>,
        ]
    }

    return (
        <Tag
            {...props}
            className={`${tagStyles[as]} ${styles[style] || styles.primary} ${sizes[size] || sizes.md} ${className}`}
        >
            {children}
        </Tag>
    )
}
