import { FaBookmark } from 'react-icons/fa'

export default function CourseCard() {
    return (
        <div className="p-2 rounded-xl">
            <div className="aspect-video bg-primary-dark rounded-xl"></div>
            <div className="flex justify-between mt-2">
                <div className="flex items-start gap-2">
                    <div className="aspect-square w-[32px] rounded-full bg-primary-dark"></div>
                    <div>
                        <p>Lorem ipsum dolor sit.</p>
                        <p className="text-sm text-gray-600">Lorem Ipsum</p>
                    </div>
                </div>
                <div>
                    <FaBookmark/>
                </div>
            </div>
        </div>
    )
}
