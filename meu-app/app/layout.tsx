import "@/app/globals.css"
import { ContadorProvider } from '../context/ContadorContext';
export default function RootLayout({children}: {children:
React.ReactNode}) {
return (
<html lang="pt-br">
<head>
<title>Contador</title>
</head>
<body>
<ContadorProvider>
{children}
</ContadorProvider>
</body>
</html>
)
}