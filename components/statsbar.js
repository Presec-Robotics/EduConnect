export default function Statsbar() {
    return (
        <>
            <nav className="fixed top-0 w-full py-2 bg-primary-light shadow-lg">
                <ul className="flex items-center justify-around list-none">
                    <li className="flex items-center justify-center gap-2 p-[5px] rounded-full bg-blue-100">
                        <i className="w-[24px] h-[24px] rounded-full bg-primary-dark"></i>
                        <span className="mr-2">180</span>
                    </li>
                    <li className="flex items-center justify-center gap-2 p-[5px] rounded-full bg-yellow-100">
                        <i className="w-[24px] h-[24px] rounded-full bg-primary-dark"></i>
                        <span className="mr-2">978</span>
                    </li>
                    <li className="flex items-center justify-center gap-2 p-[5px] rounded-full bg-red-100">
                        <i className="w-[24px] h-[24px] rounded-full bg-red-400"></i>
                        <span className="mr-2">7</span>
                    </li>
                    <li className="w-[34px] h-[34px] rounded-full bg-primary-dark"></li>
                </ul>
            </nav>
        </>
    )
}
