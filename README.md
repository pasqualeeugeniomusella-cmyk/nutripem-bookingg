# NutriPEM — Sito completo (homepage + prenotazioni + area admin)

Sito unico e reale:
- **`/`** — la homepage pubblica (Chi Sono, Esperienze, Formazione, Servizi, Contatti)
- **`/admin`** — la tua area privata per creare gruppi, generare slot e gestire le prenotazioni
- **`/book/[slug]`** — la pagina che i pazienti vedono quando apri il link del loro gruppo

## Come funziona

- **Tu (admin)** accedi a `/admin` con una password (vedi sotto). Da lì:
  - crei un **gruppo** (es. "Squadra Under 17", "Clienti privati") → ottieni un link da inviare ai pazienti
  - per ogni gruppo, selezioni **più giorni** sul calendario e un **intervallo orario** (es. dalle 09:00 alle 13:00 ogni 30 minuti) → con un click generi tutti gli slot
  - vedi le prenotazioni in arrivo e puoi **cancellarle** (solo tu puoi farlo) — il paziente riceve una email di annullamento
- **I pazienti** aprono il link del loro gruppo (es. `tuosito.com/book/squadra-under-17`), vedono solo i giorni/orari liberi, scelgono uno slot, inseriscono nome ed email → ricevono subito una email di conferma. Tu ricevi una notifica email per ogni nuova prenotazione.

## Installazione in locale

```bash
npm install
cp .env.example .env       # poi modifica i valori dentro .env
npx prisma migrate dev --name init
npm run dev
```

Apri http://localhost:3000/admin — la password è quella che hai scritto in `.env` come `ADMIN_PASSWORD`.

## Variabili da configurare in `.env`

| Variabile | Cosa è |
|---|---|
| `DATABASE_URL` | Va bene `file:./dev.db` per iniziare. Per produzione usa un database vero (vedi sotto). |
| `ADMIN_PASSWORD` | La password con cui accedi tu a `/admin`. |
| `SESSION_SECRET` | Una stringa lunga a caso, serve per proteggere il login. |
| `RESEND_API_KEY` | Per inviare davvero le email: crea un account gratuito su [resend.com](https://resend.com), genera una API key. |
| `EMAIL_FROM` | L'indirizzo "da" che vedranno i pazienti. In test puoi usare `onboarding@resend.dev`. Per usare la tua email/dominio dovrai verificarlo su Resend. |
| `ADMIN_EMAIL` | La tua email, per ricevere la notifica ad ogni nuova prenotazione. |
| `NEXT_PUBLIC_BASE_URL` | L'indirizzo del sito una volta online (es. `https://nutripem.it`). |
| `NEXT_PUBLIC_BOOKING_SLUG` | (Opzionale) lo slug del tuo gruppo principale, per far puntare i bottoni "Prenota" della homepage al link giusto. Lascialo vuoto finché non crei il primo gruppo in `/admin`, poi aggiungilo e rifai il deploy. |

Senza `RESEND_API_KEY` il sito funziona comunque (prenotazioni e cancellazioni si salvano nel database),
ma le email non vengono inviate — lo vedrai scritto nei log del server.

## Pubblicare il sito online (consigliato: Vercel)

1. Crea un repository su GitHub con questi file e fai il push.
2. Vai su [vercel.com](https://vercel.com) → "New Project" → importa il repository.
3. **Database**: SQLite (`file:./dev.db`) NON funziona su Vercel perché il filesystem non è permanente.
   Per produzione, crea un database Postgres gratuito su [neon.tech](https://neon.tech) o [supabase.com](https://supabase.com),
   copia la stringa di connessione in `DATABASE_URL`, e in `prisma/schema.prisma` cambia:
   ```
   provider = "postgresql"
   ```
   invece di `"sqlite"`. Poi esegui una volta `npx prisma migrate deploy`.
4. Inserisci tutte le variabili di `.env` nelle "Environment Variables" del progetto su Vercel.
5. Deploy. Il sito sarà online su un indirizzo `tuoprogetto.vercel.app` (puoi collegare un dominio tuo dopo).

## Sicurezza

- Solo chi conosce `ADMIN_PASSWORD` può accedere a `/admin`, creare gruppi, generare slot e **cancellare prenotazioni**.
- I pazienti, tramite il link pubblico, possono solo **vedere gli slot liberi e prenotarne uno** — non possono cancellare né vedere le prenotazioni altrui.
