/**
 * Integração multi-cliente: busca o número de WhatsApp e o status do site
 * a partir do hostname e reescreve os links de WhatsApp em tempo de execução.
 */
export function ClientIntegrationScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(async function() {
  const SUPABASE_URL = "https://yjspfyxjonppdjfpelqh.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlqc3BmeXhqb25wcGRqZnBlbHFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxNjA1MzEsImV4cCI6MjEwMjczNjUzMX0.acHPv7iznkmQAUoawpUNZX3oYRulbQlwpeGGLmYFlH0";  
  const SITE_ID = window.location.hostname.replace(/^www\\./, '');

  try {
    const response = await fetch(SUPABASE_URL + "/rest/v1/sites_clientes?id=eq." + SITE_ID + "&select=whatsapp_numero,status_ativo", {
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": "Bearer " + SUPABASE_ANON_KEY
      }
    });

    const data = await response.json();
    if (!data || data.length === 0) return;

    const cliente = data[0];

    // Trava de Segurança: Tela 404
    if (cliente.status_ativo === false) {
      document.body.innerHTML = \`
        <div style="display:flex; justify-content:center; align-items:center; height:100vh; background:#111; color:#fff; font-family:sans-serif; text-align:center;">
          <div>
            <h1 style="font-size: 3rem; margin-bottom: 10px;">404</h1>
            <p style="color: #888;">Este site está temporariamente indisponível.</p>
          </div>
        </div>
      \`;
      return;
    }

    // Injeção Inteligente de Número
    if (cliente.whatsapp_numero) {
      const numeroLimpo = cliente.whatsapp_numero.replace(/\\D/g, '');

      const formatarLinkWhatsapp = (urlOriginal) => {
        try {
          const url = new URL(urlOriginal);
          if (url.hostname === 'api.whatsapp.com') {
            url.searchParams.set('phone', numeroLimpo);
            return url.toString();
          } else if (url.hostname === 'wa.me') {
            const textParam = url.searchParams.get('text');
            const novaUrl = new URL("https://wa.me/" + numeroLimpo);
            if (textParam) novaUrl.searchParams.set('text', textParam);
            return novaUrl.toString();
          }
        } catch (e) {
          return urlOriginal;
        }
        return urlOriginal;
      };

      // Intercepta cliques em links <a>
      document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link && (link.href.includes('api.whatsapp.com') || link.href.includes('wa.me'))) {
          link.href = formatarLinkWhatsapp(link.href);
        }
      }, true);

      // Intercepta chamadas de script via window.open
      const windowOpenOriginal = window.open;
      window.open = function(url, target, features) {
        if (typeof url === 'string' && (url.includes('api.whatsapp.com') || url.includes('wa.me'))) {
          url = formatarLinkWhatsapp(url);
        }
        return windowOpenOriginal.call(window, url, target, features);
      };
    }

  } catch (error) {
    console.error("Erro na integração Supabase:", error);
  }
})();
    `,
      }}
    />
  );
}
