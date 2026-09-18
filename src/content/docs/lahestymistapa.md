---
title: Lähestymistapa
description: Periaatteet, joilla Toni Hintikka neuvoo AI-työkalujen käyttöönottoa.
---

## Mitä AI tekee hyvin — ja mitä sinä omistat

| Agentti | Ihminen |
|---|---|
| Ensimmäinen toteutus selkeässä rajassa | Intentio: mitä rakennetaan ja miksi |
| Boilerplate, scaffoldit, refaktorointi testien kanssa | Maku: API-muoto, nimet, tuote |
| Laaja koodihaku ja yhteenveto | Merge ja vastuu siitä mitä menee tuotantoon |
| Testiehdotukset ja epäonnistumisten toisto | Turvallisuus- ja compliance-harkinta |

Generointi on halpaa. **Verifiointi on pullonkaula** — suunnittele review, testit ja merge-portit, älä vain lisää kirjoittamista.

## Kerrosmalli (työkaluagnostinen)

Frontier-harnessit konvergoivat samaan jakoon, vaikka kansiot ja nimet vaihtelevat:

1. **Sopimus** — lyhyt aina päällä oleva ohje (`AGENTS.md` / vastaava)
2. **Skills** — proseduurit, jotka ladataan tarvittaessa ([Agent Skills](https://agentskills.io/home))
3. **Hooks / permissions / CI** — “aina” ja “ei koskaan” jotka oikeasti pitävät
4. **Spawn / subagent** — eristetty konteksti meluisalle tai rinnakkaiselle työlle

Nimetty agenttikatalogi on yksi tapa. Se ei ole ainoa. Kiinteä persona kannattaa, kun raja on uudelleenkäytettävä **ja** harness oikeasti estää rikkomisen.

## Miten pysyä ajan tasalla

- Arvioi työkalut **kvartaaleittain**, älä viikoittain.
- Anna agentin hakea **ensisijaisia** vendor-dokumentteja ja avaa issue/PR, kun ohje vanhenee.
- Pidä päätökset avoimessa muodossa (Markdown-vault / Shared Brain), jotta seuraava sessio tai harness löytää ne.

Nämä eivät ole dogmia. Tiimit kehittävät parempia tapoja yhdessä — AI avaa työnkulkuja, joita ei aiemmin voinut tehdä käytännössä.
