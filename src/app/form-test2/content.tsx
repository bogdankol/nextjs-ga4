'use client'
import styles from './page.module.css'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { clsx } from 'clsx'

export default function Content() {
	const [email, setEmail] = useState<string>()
	const [password, setPassword] = useState<string>()
	const [textarea, setTextarea] = useState<string>()
	const [validationPassed, setValidationPassed] = useState<boolean>(false)

	const validate = () => {
    if(!email || !password || !textarea) throw Error('some fields are not filled')
		setValidationPassed(!validationPassed)
  }

	const submitHandler = (e: { preventDefault: Function }) => {
		e.preventDefault()
		validate()

		console.log('submitted')
	}

	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<button>button to track 1</button>
				<button>button to track 2</button>

				<Link href={'/'}>/main-page</Link>

					<form
						autoComplete=''
						className={styles.form + validationPassed ? styles.validationPassed : ''}
						onSubmit={submitHandler}
					>
						<input
							className={styles.input}
							type='email'
							placeholder='type an email'
							onChange={(e: any) => setEmail(e.target.value)}
						/>
						<input
							className={styles.input}
							type='password'
							placeholder='type an password'
							onChange={(e: any) => setPassword(e.target.value)}
						/>
						<input
							className={styles.input}
							type='textarea'
							placeholder='type a comment'
							onChange={(e: any) => setTextarea(e.target.value)}
						/>
						<button
							type='submit'
							className={styles.submitBtn}
						>
							submit
						</button>
					</form>
			</div>
		</main>
	)
}
