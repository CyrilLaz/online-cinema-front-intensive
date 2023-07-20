import classNames from 'classnames'
import { ContentState, EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { FC, useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { ITextEditor } from './form.interface'
import styles from './form.module.scss'

const TextEditor: FC<ITextEditor> = ({
	onChange,
	placeholder,
	value,
	error,
}) => {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	)

	const [isUpdated, setIsUpdated] = useState(false)

	useEffect(() => {
		if (isUpdated) return
		const defaultValue = value || ''
		const blocksFromHtml = htmlToDraft(defaultValue)

		const contentState = ContentState.createFromBlockArray(
			blocksFromHtml.contentBlocks,
			blocksFromHtml.entityMap
		)

		const newEditorState = EditorState.createWithContent(contentState)
		setEditorState(newEditorState)
	}, [isUpdated, value])

	const onEditorStateChange = (editorState: EditorState) => {
		setIsUpdated(true)
		setEditorState(editorState)
		console.log(convertToRaw(editorState.getCurrentContent()));
		
		return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
	}
	return (
		<div
			className={classNames(
				styles.common,
				styles.editorWrapper,
				styles.field,
				'animate-fade'
			)}
		>
			<label>
				<span>{placeholder}</span>
				<div className={styles.wrapper}>
					<Editor
						onEditorStateChange={onEditorStateChange}
						toolbarClassName={styles.toolbar}
						editorClassName={styles.editor}
						editorState={editorState}
						spellCheck
						toolbar={{
							options: ['inline', 'list'],
							inline: {
								inDropdown: false,
								className: undefined,
								options: ['bold', 'italic', 'underline','strikethrough'],
							},
							list: {
								inDropdown: false,
								className: undefined,
								options: ['unordered', 'ordered'],
							},
						}}
					/>
				</div>
			</label>
			{error && <span className={styles.error}>{error.message}</span>}
		</div>
	)
}
export default TextEditor
