import { Spin } from 'antd';
// import { useAppSelector } from './hook';
// import { MOBILE_DEVICE } from 'slices/templates/templates.slice';

interface loading {
	align?: string
	cover?: string
}

const Loading = (_props: loading) => {
	// const { align, cover } = _props
	// const isMobile = useAppSelector(MOBILE_DEVICE)

	return (
		// <div className={`loading text-${align} cover-${cover}`}>
		// <div className={isMobile ? 'loading-center-sm' : 'loading-center-lg'}>
		<div className={'loading-center-lg'}>
			<Spin />
		</div>
	)
}

Loading.defaultProps = {
	align: 'center',
	cover: 'inline'
};

export default Loading
