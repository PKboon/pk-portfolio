"use client";

import { ComponentProps, useEffect, useRef } from "react";

export type InfiniteSlidingLoopProps = {
	children: React.ReactNode;
	slidingKeyframeName: string;
	widthProperty: string;
	speed: number;
	direction?: string;
};

export function InfiniteSlidingLoop({
	children,
	slidingKeyframeName,
	widthProperty,
	speed = 20,
	direction = "left",
	...props
}: InfiniteSlidingLoopProps & ComponentProps<"div">) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const container = containerRef.current;
		const content = contentRef.current;

		if (container && content) {
			// Ensure the browser has updated the layout before manipulating styles
			requestAnimationFrame(() => {
				const contentWidth = content.scrollWidth;

				// Duplicate the content
				content.innerHTML += content.innerHTML;
				content.style.width = content.innerHTML;

				// Direction
				content.style.setProperty(
					`${widthProperty}`,
					`${direction === "right" ? "" : "-"}${contentWidth}px`
				);

				// Set up the animation
				const animationDuration = contentWidth / speed + "s";
				content.style.animation = `${slidingKeyframeName} ${animationDuration} linear infinite`;
			});
		}
	}, [direction, slidingKeyframeName, speed, widthProperty]);

	return (
		<div
			className={`relative overflow-hidden py-2.5 ${props.className}`}
			ref={containerRef}
		>
			<div
				className={`flex absolute ${
					direction === "right" ? "right-4" : ""
				}`}
				ref={contentRef}
			>
				{children}
			</div>
		</div>
	);
}
