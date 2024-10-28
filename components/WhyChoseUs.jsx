import React from 'react';

export default function WhyChoseUs() {
  return (
    <div className="my-14">
      <div className="text-4xl text-emerald-500 mb-6 text-center font-bold flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-8 h-8 mr-2 text-emerald-500 animate-bounce"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          />
          <path
            d="M13 7h-2v6h6v-2h-4z"
          />
        </svg>
        Pourquoi choisir Longrichstore By Caleb
      </div>
      <div className="grid px-3 grid-cols-1 mt-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Certifier Longrich",
            description:
              "Nos produits sont soigneusement sélectionnés et respectent les critères stricts de Longrich",
          },
          {
            title: "Commande facile",
            description:
              "Pas besoin de carte de crédit pour faire une commande, procédez facilement et vous serez guidé",
          },
          {
            title: "Retour Garanti",
            description:
              "Longrich permet le remboursement des produits pour les clients non satisfaits",
          },
          {
            title: "Livraison possible",
            description:
              "Nous livrons à ceux de la ville de LUBUMBASHI et exportons partout dans le monde",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 flex flex-col justify-between bg-opacity-80 rounded-xl shadow-lg"
          >
            <p className="play text-2xl text-emerald-500 flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 mr-2"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                />
                <path d="M13 7h-2v6h6v-2h-4z" />
              </svg>
              {item.title}
            </p>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}