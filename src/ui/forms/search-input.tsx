import { css } from '@/styled-system/css';
import { Input } from '@/ui/input';

export function SearchInput() {
	return (
		<div>
			<Input
				type="search"
				placeholder="Search..."
				className={css({ md: { w: '100px' }, lg: { w: '300px' } })}
			/>
		</div>
	);
}
