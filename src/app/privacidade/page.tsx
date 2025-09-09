// app/privacidade/page.tsx
export default function PrivacyPolicyPage() {
    return (
        <main>
            <div className="container policy-container">
                <header className="policy-header">
                    <h1 className="policy-title">Política de Privacidade</h1>
                    <p className="policy-subtitle">Última atualização: 08 de setembro de 2025</p>
                </header>

                <div className="policy-content">
                    <p>
                        No GestorX, sua privacidade é nossa prioridade máxima. Esta Política de Privacidade explica como lidamos com as informações, diferenciando claramente nosso site informativo (&quot;Site&quot;) e nosso aplicativo de desktop (&quot;Software&quot;).
                    </p>

                    <h2>O Aplicativo GestorX: 100% Offline e Privado</h2>
                    <p>
                        O design do nosso Software é centrado na sua privacidade e controle total dos dados.
                    </p>
                    <ul>
                        <li>
                            <strong>Nenhuma Coleta de Dados:</strong> O Software GestorX **não coleta, não armazena, não transmite e não compartilha NENHUM dado pessoal ou empresarial** com nossos servidores ou com terceiros.
                        </li>
                        <li>
                            <strong>Armazenamento Local:</strong> Todas as informações que você insere no Software — como dados de vendas, estoque, clientes, finanças e fornecedores — são salvas exclusivamente em um arquivo de banco de dados SQLite localizado no seu próprio computador.
                        </li>
                        <li>
                            <strong>Sem Acesso à Internet:</strong> O Software foi projetado para funcionar completamente offline. Ele não requer uma conexão com a internet para operar suas funcionalidades principais.
                        </li>
                    </ul>
                    <p>
                        Em resumo: **seus dados são seus e ficam apenas com você.**
                    </p>

                    <h2>O Site GestorX (gestorx.com.br)</h2>
                    <p>
                        Nosso Site serve para fornecer informações sobre o Software, documentação e permitir o download. A coleta de dados no Site é mínima e limitada a:
                    </p>
                    <ul>
                        <li>
                            <strong>Dados de Análise (Analytics):</strong> Podemos usar ferramentas como Google Analytics ou Vercel Analytics para coletar dados anônimos de navegação (como páginas visitadas e tempo de permanência) para entendermos como nosso site está sendo usado e como podemos melhorá-lo.
                        </li>
                        <li>
                            <strong>Cookies:</strong> Usamos cookies essenciais para o funcionamento técnico do site. Não usamos cookies de rastreamento para fins publicitários.
                        </li>
                        <li>
                            <strong>Formulários de Contato/Newsletter:</strong> Se você optar por nos contatar ou se inscrever em nossa newsletter, coletaremos as informações que você fornecer (como nome e e-mail) exclusivamente para responder à sua solicitação.
                        </li>
                    </ul>

                    <h2>Seus Direitos</h2>
                    <p>
                        Você tem o direito de solicitar o acesso ou a exclusão de qualquer informação pessoal que tenhamos coletado através do nosso Site. Para fazer isso, por favor, entre em contato.
                    </p>

                    <h2>Alterações na Política</h2>
                    <p>
                        Podemos atualizar esta política de tempos em tempos. Notificaremos sobre quaisquer alterações, publicando a nova política nesta página e atualizando a data de &quot;Última atualização&quot;.
                    </p>
                </div>
            </div>
        </main>
    );
}