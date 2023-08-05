import { css, cx } from '../../styled-system/css';

const styles = css({
	borderWidth: '1px',
	borderRadius: '8px',
	paddingX: '12px',
	paddingY: '24px',
});

const Card = ({ className, ...props }: any) => {
	const rootClassName = cx(styles, className);
	return <div className={rootClassName} {...props} />;
};
