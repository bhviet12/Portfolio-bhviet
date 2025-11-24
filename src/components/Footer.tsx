import { useTheme } from '../contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      style={{
        backgroundColor: theme === 'light' ? '#000000' : '#ffffff',
        borderTop: `1px solid ${theme === 'light' ? '#3f3f46' : '#e5e5e5'}`,
        padding: '32px 0',
        textAlign: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        <p
          style={{
            fontSize: '16px',
            color: theme === 'light' ? '#ffffff' : '#000000',
            margin: 0
          }}
        >
          @2025 copyright
        </p>
      </div>
    </footer>
  );
}
