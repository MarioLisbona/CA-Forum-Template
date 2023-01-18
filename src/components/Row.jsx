import React from 'react'
import PreviewCard from './PreviewCard'

const Row = () => {
	return (
		<>
			<div class="row">
				<div class="col-lg-4 ">
					<PreviewCard />
				</div>
				<div class="col-lg-4">
					<PreviewCard />
				</div>
				<div class="col-lg-4">
					<PreviewCard />
				</div>
      </div>
		</>
	)
}

export default Row