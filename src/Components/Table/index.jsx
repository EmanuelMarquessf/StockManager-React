import styles from "./styles.module.css";

export default function Header() {
  return (
    <table>
      <tr>
        <th>
          Diversidade de Itens
        </th>
        <th>
          Ações
        </th>
      </tr>
      <tr>
        <td>
          O Senhor dos Anéis
        </td>
        <td style={{textAlign: 'center'}}>
          <button>Ver</button>
        </td>
      </tr>
      <tr>
        <td>
          O Senhor dos Anéis
        </td>
        <td style={{textAlign: 'center'}}>
          <button>Ver</button>
        </td>
      </tr>
    </table>
  );
}
