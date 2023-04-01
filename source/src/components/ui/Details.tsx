import { FC, ReactNode } from 'react'

const Details: FC<{ title: string; children: ReactNode | string }> = ({
	title,
	children,
}) => {
	return (
		<details className="inline-block">
			<summary className="font-medium select-none cursor-pointer">
				{title}
			</summary>
			<div className="mt-4 font-light text-xs text-slate-700">{children}</div>
		</details>
	)
}

export default Details
