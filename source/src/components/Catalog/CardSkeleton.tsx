import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = () => {
	return (
		<div className="px-6 py-7 max-w-xs w-full bg-white rounded-xl shadow-md">
			<div className="flex justify-center">
				<Skeleton width={200} height={200} />
			</div>
			<div className="mt-1 flex items-center gap-2">
				<div className="opacity-50">
					<Skeleton circle width={16} height={16} />
				</div>
				<span className="text-xs text-slate-700">
					<Skeleton width={32} height={16} />
				</span>
			</div>
			<h4 className="font-medium line-clamp-3 h-[72px]">
				<Skeleton count={3} />
			</h4>
			<div className="mt-5">
				<ul className="font-light text-sm text-slate-700 [&>li]:flex [&>li>div]:flex-1 [&>li>div]:ml-2">
					<li>
						Штрихкод:
						<div>
							<Skeleton />
						</div>
					</li>
					<li>
						Производитель:
						<div>
							<Skeleton />
						</div>
					</li>
					<li>
						Бренд:
						<div>
							<Skeleton />
						</div>
					</li>
				</ul>
			</div>
			<div className="mt-4 flex items-center justify-between">
				<Skeleton width={50} height={25} />

				<Skeleton width={151} height={44} borderRadius={80} />
			</div>
		</div>
	)
}

export default CardSkeleton
