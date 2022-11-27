import { Raleway } from '@next/font/google'
import { TodosView } from 'components/templates/TodosView'

import { ReactNode } from 'react'

import './globals.css'

const raleway = Raleway({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={raleway.className}>
            {/*
                <head /> will contain the components returned by the nearest parent
                head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
            */}
            <head />
            <body className="w-screen h-screen">
                <section className="w-full h-full flex justify-center items-center">
                    <TodosView />
                    {children}
                </section>
            </body>
        </html>
    )
}
