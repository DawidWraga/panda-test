import { css } from '@/styled-system/css';
import { hstack } from '@/styled-system/patterns';

export interface NewsletterSectionProps {}

export function NewsletterSection(props: NewsletterSectionProps) {
	const {} = props;

	return (
		<>
			<section className={css({ bgColor: 'gray.50' })}>
				<div
					className={css({
						p: '8',
						md: { p: '12' },
						lg: { pl: '16', pr: '16', pt: '24', pb: '24' },
					})}
				>
					<div
						className={css({
							ml: 'auto',
							mr: 'auto',
							maxW: 'lg',
							textAlign: 'center',
						})}
					>
						<h2
							className={css({
								fontSize: '2xl',
								lineHeight: '2xl',
								fontWeight: 'bold',
								color: 'gray.900',
								md: { fontSize: '3xl', lineHeight: '3xl' },
							})}
						>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit
						</h2>

						<p
							className={css({
								display: 'none',
								color: 'gray.500',
								sm: { mt: '4', display: 'block' },
							})}
						>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
							dolor officia blanditiis repellat in, vero, aperiam porro ipsum
							laboriosam consequuntur exercitationem incidunt tempora nisi?
						</p>
					</div>

					<div className={css({ ml: 'auto', mr: 'auto', mt: '8', maxW: 'xl' })}>
						<form
							action="#"
							className={css({ sm: { display: 'flex', gap: '4' } })}
						>
							<div className={css({ sm: { flex: '1' } })}>
								<label
									htmlFor="email"
									className={css({
										pos: 'absolute',
										w: 'sr.only',
										h: 'sr.only',
										p: 'sr.only',
										m: 'sr.only',
										overflow: 'hidden',
										clip: 'rect(0, 0, 0, 0)',
										whiteSpace: 'nowrap',
										borderWidth: '0',
									})}
								>
									Email
								</label>

								<input
									type="email"
									placeholder="Email address"
									className={css({
										w: 'full',
										rounded: 'md',
										borderColor: 'gray.200',
										bgColor: 'white',
										p: '3',
										color: 'gray.700',
										shadow: 'sm',
										transitionProperty:
											'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
										transitionTimingFunction: 'transition',
										transitionDuration: 'transition',
										_focus: {
											borderColor: 'white',
											ring: 'none',
											ringOffset: 'none',
											shadow: 'ring',
										},
									})}
								/>
							</div>

							<button
								type="submit"
								className={css({
									mt: '4',
									display: 'flex',
									w: 'full',
									alignItems: 'center',
									justifyContent: 'center',
									gap: '2',
									rounded: 'md',
									bgColor: 'rose.600',
									pl: '5',
									pr: '5',
									pt: '3',
									pb: '3',
									color: 'white',
									transitionProperty:
										'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
									transitionTimingFunction: 'transition',
									transitionDuration: 'transition',
									_focus: { ring: 'none', ringOffset: 'none', shadow: 'ring' },
									sm: { mt: '0', w: 'auto' },
								})}
							>
								<span
									className={css({
										fontSize: 'sm',
										lineHeight: 'sm',
										fontWeight: 'medium',
									})}
								>
									{' '}
									Sign Up{' '}
								</span>

								<svg
									className={css({
										h: '5',
										w: '5',
									})}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
