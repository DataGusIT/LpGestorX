// app/termos/page.tsx
import Link from 'next/link'; // IMPORTANTE: Importação do Link corrigida

export default function TermsOfUsePage() {
    return (
        <main>
            <div className="container policy-container">
                <header className="policy-header">
                    <h1 className="policy-title">Termos de Uso</h1>
                    <p className="policy-subtitle">Última atualização: 08 de setembro de 2025</p>
                </header>

                <div className="policy-content">
                    <p>
                        Bem-vindo ao GestorX! Ao baixar, instalar ou utilizar nosso software (&quot;Software&quot;) e ao navegar em nosso site (&quot;Site&quot;), você concorda em cumprir os seguintes Termos de Uso.
                    </p>

                    <h2>1. Licença do Software</h2>
                    <p>
                        O Software GestorX é disponibilizado sob a **Licença MIT**, uma licença de software livre permissiva. Isso significa que você tem a liberdade de:
                    </p>
                    <ul>
                        <li>Usar o Software para qualquer finalidade (pessoal, comercial, etc.), gratuitamente.</li>
                        <li>Modificar o código-fonte do Software para adaptá-lo às suas necessidades.</li>
                        <li>Distribuir cópias do Software original ou modificado.</li>
                    </ul>
                    <p>
                        A única condição é que o aviso de direitos autorais e o texto da licença original sejam incluídos em todas as cópias ou partes substanciais do software. Você pode ler a licença completa <Link href="#" target="_blank">aqui</Link>.
                    </p>

                    <h2>2. Isenção de Garantia</h2>
                    <p>
                        O SOFTWARE É FORNECIDO &quot;COMO ESTÁ&quot;, SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO A, GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM FIM ESPECÍFICO E NÃO VIOLAÇÃO.
                    </p>
                    <p>
                        Por ser um software 100% offline, você é o único responsável pela segurança, gerenciamento e backup dos seus dados. Recomendamos a realização de backups regulares do arquivo do banco de dados.
                    </p>

                    <h2>3. Limitação de Responsabilidade</h2>
                    <p>
                        EM NENHUMA CIRCUNSTÂNCIA OS AUTORES OU DETENTORES DOS DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER RECLAMAÇÃO, DANOS OU OUTRA RESPONSABILIDADE, SEJA EM AÇÃO DE CONTRATO, DELITO OU DE OUTRA FORMA, DECORRENTE DE, FORA DE OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO SOFTWARE.
                    </p>

                    <h2>4. Uso do Site e do Software</h2>
                    <p>
                        Você concorda em não usar nosso Site ou Software para qualquer finalidade ilegal ou proibida por estes termos. Você é responsável por todas as suas atividades em conexão com o Serviço.
                    </p>

                    <h2>5. Alterações nos Termos</h2>
                    <p>
                        Reservamo-nos o direito de modificar estes termos a qualquer momento. Notificaremos sobre quaisquer alterações, publicando os novos termos nesta página.
                    </p>

                    <h2>6. Contato</h2>
                    <p>
                        Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do nosso <Link href="/#contato">formulário de contato</Link>.
                    </p>
                </div>
            </div>
        </main>
    );
}