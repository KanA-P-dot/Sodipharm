<?php

namespace App\Controller;

use App\Repository\ProduitRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProduitController extends AbstractController
{
    #[Route('/produit', name: 'app_produit')]
    public function index(ProduitRepository $ProduitRepository): Response
    {
        // Récupérer les produits depuis la base de données
        $Produits = $ProduitRepository->findAll();

        return $this->render('produit.html.twig', [
            'Produits' => $Produits,
        ]);
    }
}
