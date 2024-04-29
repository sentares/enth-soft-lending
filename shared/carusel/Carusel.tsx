import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './CaruselDotButton'
import {
	PrevButton,
	NextButton,
	usePrevNextButtons,
} from './CaruselArrowButton'
import useEmblaCarousel from 'embla-carousel-react'
import { hostsDataTypes } from '@/lib/dataType'
import { ChevronDown } from 'lucide-react'

type PropType = {
	slides: hostsDataTypes[]
	options?: EmblaOptionsType
}

const HostsCarusel: React.FC<PropType> = props => {
	const { slides, options } = props
	const [emblaRef, emblaApi] = useEmblaCarousel(options)

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi)

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi)

	return (
		<section className='embla'>
			<div className='embla__viewport' ref={emblaRef}>
				<div className='embla__container'>
					{slides.map(item => (
						<div className='embla__slide' key={item.id}>
							<div
								className='bg-gray-100 border border-black/5 overflow-hiddenhover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 min-w-[240px] '
								style={{
									borderRadius: '20px',
									height: '420px',
								}}
							>
								<div
									className='w-full p-2 text-white flex flex-col '
									style={{
										height: '180px',
										background: '#04764e',
										padding: '20px',
										borderRadius: '20px 20px 0 0',
										textAlign: 'start',
										justifyContent: 'space-between',
									}}
								>
									<div>
										<h3 className='text-lg font-semibold flex'>{item.name}</h3>
										<p className='text-wrap flex' style={{ fontSize: '15px' }}>
											{item.title}
										</p>
									</div>
									<div>
										<p>
											<label className='font-semibold text-lg'>
												{item.month}
											</label>{' '}
											<label>Cом</label> /мес
										</p>
									</div>
								</div>
								<div
									className='flex'
									style={{ padding: '20px', alignItems: 'start' }}
								>
									<ul
										className='flex flex-col gap-2'
										style={{ alignItems: 'start' }}
									>
										<li className='flex'>
											<ChevronDown color='#369171' />
											<label>
												<span className='font-semibold'>
													{item.sites.match(/\d+/)}
												</span>
												{item.sites.replace(/\d+/, '')}
											</label>
										</li>
										<li
											style={{
												alignItems: 'start',
												display: 'flex',
												textAlign: 'start',
											}}
										>
											<ChevronDown color='#369171' />
											<div className='flex'>
												<div className='font-semibold'>{item.NVM}</div>
												<div
													style={{
														textAlign: 'start',
														flexWrap: 'wrap',
														paddingLeft: '3px',
													}}
												>
													ГБ на быстрых NVMe-дисках
												</div>
											</div>
										</li>
										<li
											style={{
												alignItems: 'start',
												display: 'flex',
												textAlign: 'start',
											}}
										>
											<ChevronDown color='#369171' />
											<label>
												<span className='font-semibold'>{item.db}</span>
											</label>
										</li>
										<li
											style={{
												alignItems: 'start',
												display: 'flex',
												textAlign: 'start',
											}}
										>
											<ChevronDown color='#369171' />
											<label className=''>
												<label className='font-semibold'>10</label>{' '}
												SSL-сертификат
											</label>
										</li>
										<li className='flex'>
											<ChevronDown color='#369171' />
											<label
												className='font-semibold'
												style={{ paddingRight: '3px' }}
											>
												10
											</label>{' '}
											ГБ почтовой квоты
										</li>
										<li className='flex'>
											<ChevronDown color='#369171' />
											<label
												className='font-semibold'
												style={{ paddingRight: '3px' }}
											>
												Неограниченное
											</label>{' '}
											почтовых ящиков
											{'  '}
										</li>
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='embla__controls'>
				<div className='embla__buttons'>
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				</div>
			</div>
		</section>
	)
}

export default HostsCarusel
