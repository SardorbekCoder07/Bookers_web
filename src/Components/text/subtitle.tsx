const Subtitle = ({ text, size }: { text: string, size?: string }) => {
    return (
        <h1 className={`${size ? size : 'text-lg'} text-[#B9B9C9]`}>
            {text}
        </h1>
    )
}

export default Subtitle;