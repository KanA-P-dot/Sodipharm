<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home()
    {
        return $this->render('home.html.twig');
    }

    /**
     * @Route("/descente", name="descente")
     */
    public function descente()
    {
        return $this->render('descente.html.twig');
    }

    /**
     * @Route("/etagere", name="etagere")
     */
    public function etagere()
    {
        return $this->render('etagere.html.twig');
    }

    /**
     * @Route("/produit", name="produit")
     */
    public function produit()
    {
        return $this->render('produit.html.twig');
    }

    /**
     * @Route("/view", name="view")
     */
    public function view()
    {
        return $this->render('view.html.twig');
    }
}
