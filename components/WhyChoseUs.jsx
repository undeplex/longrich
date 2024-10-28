import React from 'react';

export default function WhyChoseUs() {
  return (
    <div className="my-14">
      <div className="text-4xl text-emerald-500 mb-6 text-center font-bold flex items-center justify-center">
        <span className="relative inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-10 h-10 text-emerald-500 mr-2"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            />
            <path d="M13 7h-2v6h6v-2h-4z" />
          </svg>
          Pourquoi choisir Longrichstore By Caleb
        </span>
      </div>
      <div className="grid px-3 grid-cols-1 mt-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Certifier Longrich */}
        <div className="bg-gradient-to-r from-emerald-100 to-emerald-300 p-6 flex flex-col justify-between bg-opacity-80 rounded-xl shadow-lg">
          <p className="play text-2xl text-emerald-700 flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 mr-2 text-emerald-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
            Certifier Longrich
          </p>
          <p className="text-gray-600">
            Nos produits sont soigneusement sélectionnés et respectent les
            critères stricts de Longrich
          </p>
        </div>
        
        {/* Commande Facile */}
        <div className="bg-gradient-to-r from-emerald-100 to-emerald-300 p-6 flex flex-col justify-between bg-opacity-80 rounded-xl shadow-lg">
          <p className="play text-2xl text-emerald-700 flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 mr-2 text-emerald-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            Commande Facile
          </p>
          <p className="text-gray-600">
            Pas besoin de carte de crédit pour faire une commande, procédez
            facilement et vous serez guidé
          </p>
        </div>

        {/* Retour Garanti */}
        <div className="bg-gradient-to-r from-emerald-100 to-emerald-300 p-6 flex flex-col justify-between bg-opacity-80 rounded-xl shadow-lg">
          <p className="play text-2xl text-emerald-700 flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 mr-2 text-emerald-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z"
              />
            </svg>
            Retour Garanti
          </p>
          <p className="text-gray-600">
            Longrich permet le remboursement des produits pour les clients non satisfaits
          </p>
        </div>

        {/* Livraison Possible */}
{/* Livraison Possible */}
        <div className="bg-gradient-to-r from-emerald-100 to-emerald-300 p-6 flex flex-col justify-between bg-opacity-80 rounded-xl shadow-lg">
          <p className="play text-2xl text-emerald-700 flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 mr-2 text-emerald-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125a1.125 1.125 0 0 0 1.125-1.125v-3.375m0 0H17.25a3 3 0 0 1-3-3v-3.75a3 3 0 0 1 3-3h2.25l3 3v6.75ZM3 10.875h10.5"
              />
            </svg>
            Livraison Possible
          </p>
          <p className="text-gray-600">
            Profitez de notre service de livraison rapide pour recevoir vos
            produits chez vous sans aucun souci.
          </p>
        </div>
      </div>
    </div>
  );
}