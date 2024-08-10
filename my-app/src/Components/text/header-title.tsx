const HeaderTitle = ({ text, size }: { text: string, size?: string }) => {
    return (
        <h1 className={`${size ? size : 'text-4xl'} font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FB7CA1] to-[#9C0B35]`}>
            {text}
        </h1>
    )
}

export default HeaderTitle