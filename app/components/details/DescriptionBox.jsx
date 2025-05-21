export default function DescriptionBox() {
  const styles = {
    descriptionWrapper: {
      margin: '20px 0',
      padding: '16px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      backgroundColor: '#f9f9f9',
    },
    heading: {
      margin: '0 0 10px',
      fontSize: '1.2rem',
      color: '#333',
    },
    description: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#555',
      backgroundColor: '#fff',
      padding: '12px',
      borderRadius: '8px',
      boxShadow: 'inset 0 0 4px rgba(0, 0, 0, 0.05)',
      wordWrap: 'break-word',
    },
  };

  return (
    <div style={styles.descriptionWrapper}>
      <h4 style={styles.heading}>Descrição:</h4>
      <div style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry...
      </div>
    </div>
  );
}
