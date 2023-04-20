import { FC, useState } from "react"
import ReactCalendar from "react-calendar"
import { add } from "date-fns"

interface indexProps {}

interface DateType {
	justDate: Date | null
	dateTime: Date | null
}

const index: FC<indexProps> = ({}) => {
	const [date, setDate] = useState<DateType>({
		justDate: null,
		dateTime: null,
	})

	const getTime = () => {
		if (!date.justDate) return

		const { justDate } = date

		const beginning = add(justDate, { hours: 9 })
		const end = add(justDate, { hours: 17 })
		const interval = 30 // in minutes

		const times = []

		for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
			times.push(i)
		}
		return times
	}

	return (
		<div className="flex h-screen flex-col items-center justify-center">
			{date.justDate ? (
				<div className="flex gap-4"></div>
			) : (
				<ReactCalendar
					minDate={new Date()}
					className="REACT-CALENDAR p-2"
					view="month"
					onClickDay={(date) =>
						setDate((prev) => ({ ...prev, justDate: date }))
					}
					locale="en"
				/>
			)}
		</div>
	)
}

export default index
