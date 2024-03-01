import Header from "../Components/Header";
import Card from "../Components/Card";

export default function Home() {
  return (
    <>
      <div className="allCards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="tablesProducts">
        <table>
          <tr>
            <th>Diversidade de Itens</th>
            <th>Ações</th>
          </tr>
          <tr>
            <td>O Senhor dos Anéis</td>
            <td style={{ textAlign: "center" }}>
              <button>Ver</button>
            </td>
          </tr>
          <tr>
            <td>O Senhor dos Anéis</td>
            <td style={{ textAlign: "center" }}>
              <button>Ver</button>
            </td>
          </tr>
        </table>

        <table>
          <tr>
            <th>Itens acabando</th>
            <th>Qtd.</th>
            <th>Ações</th>
          </tr>
          <tr>
            <td>O Senhor dos Anéis</td>
            <td style={{ textAlign: "center" }}>8</td>
            <td style={{ textAlign: "center" }}>
              <button>Ver</button>
            </td>
          </tr>
          <tr>
            <td>O Senhor dos Anéis</td>
            <td style={{ textAlign: "center" }}>8</td>
            <td style={{ textAlign: "center" }}>
              <button>Ver</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
