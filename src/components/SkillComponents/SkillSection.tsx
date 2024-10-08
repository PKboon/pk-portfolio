import { SkillObject } from "@/types";
import { InfiniteSlidingLoop, SkillChip } from "@/components";

export function SkillSection() {
	const rows: SkillObject[][] = [
		[
			{ id: "skill1", label: "Web development", type: "technical" },
			{ id: "skill2", label: "Figma", type: "tool" },
			{ id: "skill3", label: "Typescript", type: "langframe" },
			{ id: "skill4", label: "VS Code", type: "tool" },
			{ id: "skill5", label: "Tailwind", type: "plugin" },
			{ id: "skill6", label: "Next.js", type: "langframe" },
			{ id: "skill7", label: "Mantine", type: "plugin" },
			{ id: "skill8", label: "Javascript", type: "langframe" },
			{ id: "skill9", label: "Vue.js", type: "langframe" },
			{ id: "skill10", label: "Pinia", type: "plugin" },
			{ id: "skill11", label: "Clickup", type: "tool" },
		],
		[
			{ id: "skill12", label: "Slack", type: "tool" },
			{ id: "skill13", label: "Bootstrap", type: "plugin" },
			{ id: "skill14", label: "Git", type: "langframe" },
			{ id: "skill15", label: "Google Suite", type: "tool" },
			{ id: "skill16", label: "Mermaid.js", type: "plugin" },
			{
				id: "skill17",
				label: "RESTful APIs development",
				type: "technical",
			},
			{ id: "skill18", label: "Github", type: "tool" },
			{ id: "skill19", label: "Axios", type: "plugin" },
			{ id: "skill20", label: "Phpstorm", type: "tool" },
			{ id: "skill21", label: "Postman", type: "tool" },
			{ id: "skill22", label: "Angular", type: "langframe" },
			{ id: "skill23", label: "Angular Material", type: "plugin" },
		],
		[
			{ id: "skill24", label: "Adobe Creative Suite", type: "tool" },
			{ id: "skill25", label: "VitePress", type: "plugin" },
			{ id: "skill26", label: "DBeaver", type: "tool" },
			{ id: "skill27", label: "MySQL", type: "langframe" },
			{ id: "skill28", label: "ApexCharts", type: "plugin" },
			{ id: "skill29", label: "Lucidchart", type: "tool" },
			{ id: "skill30", label: "Trello", type: "tool" },
			{ id: "skill31", label: "DynamoDB", type: "langframe" },
			{ id: "skill32", label: "Database design", type: "technical" },
			{ id: "skill33", label: "IntelliJ", type: "tool" },
		],
	];

	const rowDetails = [
		{
			keyframeName: "skill-row-1-sliding",
			widthProperty: "--skill-row-1-w",
			speed: 22,
		},
		{
			keyframeName: "skill-row-2-sliding",
			widthProperty: "--skill-row-2-w",
			speed: 17,
			direction: "right",
		},
		{
			keyframeName: "skill-row-3-sliding",
			widthProperty: "--skill-row-3-w",
			speed: 25,
		},
	];

	return (
		<>
			{rows.map((row, rowIndex) => (
				<InfiniteSlidingLoop
					className="h-11"
					key={`skillrow${rowIndex}`}
					slidingKeyframeName={rowDetails[rowIndex].keyframeName}
					widthProperty={rowDetails[rowIndex].widthProperty}
					speed={rowDetails[rowIndex].speed}
					direction={rowDetails[rowIndex]?.direction}
				>
					{row.map((skill) => (
						<div key={skill.id}>
							<SkillChip skill={skill} />
						</div>
					))}
					{row.map((skill) => (
						<div key={skill.id}>
							<SkillChip skill={skill} />
						</div>
					))}
				</InfiniteSlidingLoop>
			))}
		</>
	);
}
