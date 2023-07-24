import { scrollToBottom } from '@/lib/utils/helpers/scrolling'
import { useEffect, useRef } from 'react'

interface MessageProps {
	message: string;
	isCurrentUser: boolean;
	createdAt: Date;
	lastMessage: boolean;
	sameUserInPreviousMessage: boolean;
	destinataryName: string;
}

export default function Message({
	message,
	isCurrentUser,
	lastMessage,
	sameUserInPreviousMessage,
	destinataryName,
}: MessageProps) {
	const lastMessageRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		scrollToBottom(lastMessageRef.current)
	}, [])
	return (
		<div className="flex flex-col">
			{!sameUserInPreviousMessage &&
				(isCurrentUser ? (
					<h2 className="mt-1 self-end font-alt text-emphasis">Você</h2>
				) : (
					<h2 className="mt-1 self-start font-alt text-emphasis">
						{destinataryName}
					</h2>
				))}
			<div
				className={`relative w-[min(60%,_520px)] break-words bg-dark-main px-4 py-2 text-alternative ${
					isCurrentUser
						? 'self-end rounded-b-md rounded-s-md'
						: 'self-start rounded-e-md rounded-bl-md'
				}`}
				ref={lastMessage ? lastMessageRef : undefined}
			>
				{message}
				<div
					className={`absolute top-0 h-0 w-0 ${
						isCurrentUser
							? '-right-2 border-b-[10px] border-l-8 border-b-transparent border-l-dark-main'
							: '-left-2 border-b-[10px] border-r-8 border-b-transparent border-r-dark-main'
					}`}
				></div>
			</div>
		</div>
	)
}
