import Logo from '../assets/images/Logo.svg?react'
import Text from '../components/text';


export default function Header({ }) {
    return <>
        <header className='flex flex-col items-center justify-center'>
            <Logo className='h-9 md:h-12' />
            <Text variant='secondary'>Organize suas tarefas e seja mais produtivo</Text>
        </header>
    </>
}