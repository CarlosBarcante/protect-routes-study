import React from 'react';

const lessons = [
    { id: 0, title: 'Aula Inicial', description: 'Aula de introdução' },
    { id: 1, title: 'Como configurar', description: 'Configurando ambiente de trabalho' },
    { id: 2, title: 'Hello World', description: 'Fazendo a primeira interação' }
]

export default function Lessons() {
    return (
        <div className='page'>
            <h1>Aulas</h1>
            <ul className='lessons'>
                {
                    lessons.map(lesson => {
                        return (
                            <li key={lesson.id}>{lesson.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}