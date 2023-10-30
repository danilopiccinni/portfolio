<script>
import { store } from '../store';
  export default {
    data() {
      return {
        store,

        italianCards : [
          {
            title: 'Approccio ai Progetti',
            description: "Sono noto per il mio approccio unico nello sviluppo di progetti. Mi concentro sugli aspetti chiave della gestione dei progetti, come l'attenzione ai dettagli, il controllo della qualità e il coinvolgimento attivo del cliente. Questo mi consente di consegnare progetti ben gestiti, in tempo e che soddisfano appieno le esigenze dei clienti."
          },
          {
            title: 'Feedback e Crescita',
            description: "Sono sempre alla ricerca di feedback e sono dedicato a migliorare costantemente. Accolgo il feedback come un'opportunità di crescita personale e professionale. I momenti in cui ho accettato il feedback sono stati cruciali per il mio sviluppo e dimostrano la mia mentalità di apprendimento costante."
          },
          {
            title: 'Adattabilità',
            description: "Sono noto per la mia flessibilità e la capacità di adattarmi a nuovi strumenti, tecnologie e ambienti di lavoro. Affronto i cambiamenti con entusiasmo e mi mantengo aggiornato sull'evoluzione dell'industria. Questa adattabilità dimostra la mia volontà di crescere e di affrontare con successo le sfide in un settore in continua evoluzione."
          }
        ],

        germanCards : [
          {
            title: 'Projektansatz',
            description: 'Ich bin bekannt für meinen einzigartigen Ansatz in der Projektentwicklung. Ich konzentriere mich auf Schlüsselfaktoren im Projektmanagement, wie die Beachtung von Details, Qualitätskontrolle und aktive Kundenbeteiligung. Dies ermöglicht es mir, gut verwaltete Projekte termingerecht und den Kundenanforderungen entsprechend zu liefern.'
          },
          {
            title: 'Feedback und Wachstum',
            description: 'Ich bin stets auf der Suche nach Feedback und widme mich kontinuierlicher Verbesserung. Ich betrachte Feedback als Gelegenheit für persönliches und berufliches Wachstum. Die Momente, in denen ich Feedback akzeptiert habe, waren entscheidend für meine Entwicklung und zeigen meine ständige Lernbereitschaft.'
          },
          {
            title: 'Anpassungsfähigkeit',
            description: 'Ich bin bekannt für meine Flexibilität und die Fähigkeit, mich an neue Tools, Technologien und Arbeitsumgebungen anzupassen. Ich gehe Veränderungen begeistert an und halte mich über die Entwicklung der Branche auf dem Laufenden. Diese Anpassungsfähigkeit zeigt meinen Willen zu Wachstum und erfolgreichem Umgang mit Herausforderungen in einer sich ständig verändernden Branche.'
          }
        ],

        englishCards : [
          {
            title: 'Project Approach',
            description: "I'm known for my unique approach in project development. I focus on key aspects of project management, such as attention to detail, quality control, and active client involvement. This enables me to deliver well-managed projects on time and to meet client needs."
          },
          {
            title: 'Feedback and Growth',
            description: "I'm always seeking feedback and dedicated to continuous improvement. I embrace feedback as an opportunity for personal and professional growth. The moments when I've accepted feedback have been crucial for my development and demonstrate my commitment to lifelong learning."
          },
          {
            title: 'Adaptability',
            description: "I'm known for my flexibility and ability to adapt to new tools, technologies, and work environments. I approach changes with enthusiasm and stay updated on the industry's evolution. This adaptability demonstrates my willingness to grow and successfully tackle challenges in a constantly changing field."
          }
        ],


      };
    },
  };
</script>

<template>
    <div :style="{'--theme-gradient': store.selectedColor}">
      <div class="container">
        <div class="cards mb-md-5 pb-md-5 d-flex justify-content-around gap-5 flex-wrap">

          <div v-if="store.language == 'italian'" v-for="card in italianCards" class="__card col-12 col-md-4" :class="store.checked ? 'dark-shadow' : ''">
            <div class="__content">
              <h6 class="heading align-self-center pt-4">{{card.title}}</h6>
              <p class="para px-3">{{card.description}}</p>
              <div class="mx-auto">
                <button class="__btn">Mi piace</button>
              </div>
            </div>
          </div>

          <div v-if="store.language == 'german'" v-for="card in germanCards" class="__card col-12 col-md-4" :class="store.checked ? 'dark-shadow' : ''">
            <div class="__content">
              <h6 class="heading align-self-center pt-4">{{card.title}}</h6>
              <p class="para px-3">{{card.description}}</p>
              <div class="mx-auto">
                <button class="__btn">Gefällt mir</button>
              </div>
            </div>
          </div>

          <div v-if="store.language == 'english'" v-for="card in englishCards" class="__card col-12 col-md-4" :class="store.checked ? 'dark-shadow' : ''">
            <div class="__content">
              <h6 class="heading align-self-center pt-4">{{card.title}}</h6>
              <p class="para px-3">{{card.description}}</p>
              <div class="mx-auto">
                <button class="__btn">Like</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>

.__card.dark-shadow {
  -webkit-box-shadow: 0px 0px 20px 0px #000000;
  -moz-box-shadow: 0px 0px 20px 0px #000000;
  -o-box-shadow: 0px 0px 20px 0px #000000;
  box-shadow: 0px 0px 20px 0px #000000;
}

.__card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;

  aspect-ratio: 1/1.5;

  -webkit-box-shadow: 0px 0px 20px 0px #ffffff;
  -moz-box-shadow: 0px 0px 20px 0px #ffffff;
  -o-box-shadow: 0px 0px 20px 0px #ffffff;
  box-shadow: 0px 0px 20px 0px #ffffff;


  overflow: hidden;
  border-radius: 10px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(16deg, #020024 0%, #300979 35%, var(--theme-gradient) 100%);
    z-index: 0;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  }
  
  &:hover::before {
    height: 100%;
  }
  
  &:hover {
    -webkit-box-shadow: 0px 0px 0px 0px #ffffff;
    -moz-box-shadow: 0px 0px 0px 0px #ffffff;
    -o-box-shadow: 0px 0px 0px 0px #ffffff;
    box-shadow: 0px 0px 0px 0px #ffffff;
  }
  
  
  .__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  
    z-index: 5;
    .heading {
      font-weight: 700;
      font-size: 25px;
    }
    .para {

      line-height: 1.5;
    }

    .__btn {
      color: #e8e8e8;
      text-decoration: none;
      padding: 10px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      background: linear-gradient(16deg, #020024 0%, #300979 35%, var(--theme-gradient) 100%);
      border-radius: 5px;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  
      &:hover {
        outline: 2px solid #e8e8e8;
        background: transparent;
        color: #e8e8e8;
      }
  
      &:active {
        box-shadow: none;
      }
    }
  }
}

.__card:hover .__btn {
    color: #212121;
    background: #f8f9fa;
  }

  .__card:hover .__content {
    color: #ffffff;

  }

  @media screen and (max-width : 341px) {
    .__card {
      width: 100%;

      .__content {
        text-align: center;
        .para {
          display: none;
        }
      }
    }
  }

</style>