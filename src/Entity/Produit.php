<?php

namespace App\Entity;

use App\Repository\ProduitRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProduitRepository::class)]
class Produit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $Produit = null;

    #[ORM\Column(length: 255)]
    private ?string $Univers = null;

    #[ORM\Column(length: 255)]
    private ?string $Rayon = null;

    #[ORM\Column]
    private ?int $Code = null;

    #[ORM\Column]
    private ?int $HAUTPRODUIT = null;

    #[ORM\Column]
    private ?int $LARGPRODUIT = null;

    #[ORM\Column]
    private ?int $LONGPRODUIT = null;

    #[ORM\Column]
    private ?int $PDSPRODUIT = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduit(): ?string
    {
        return $this->Produit;
    }

    public function setProduit(string $Produit): static
    {
        $this->Produit = $Produit;

        return $this;
    }

    public function getUnivers(): ?string
    {
        return $this->Univers;
    }

    public function setUnivers(string $Univers): static
    {
        $this->Univers = $Univers;

        return $this;
    }

    public function getRayon(): ?string
    {
        return $this->Rayon;
    }

    public function setRayon(string $Rayon): static
    {
        $this->Rayon = $Rayon;

        return $this;
    }

    public function getCode(): ?int
    {
        return $this->Code;
    }

    public function setCode(int $Code): static
    {
        $this->Code = $Code;

        return $this;
    }

    public function getHAUTPRODUIT(): ?int
    {
        return $this->HAUTPRODUIT;
    }

    public function setHAUTPRODUIT(int $HAUTPRODUIT): static
    {
        $this->HAUTPRODUIT = $HAUTPRODUIT;

        return $this;
    }

    public function getLARGPRODUIT(): ?int
    {
        return $this->LARGPRODUIT;
    }

    public function setLARGPRODUIT(int $LARGPRODUIT): static
    {
        $this->LARGPRODUIT = $LARGPRODUIT;

        return $this;
    }

    public function getLONGPRODUIT(): ?int
    {
        return $this->LONGPRODUIT;
    }

    public function setLONGPRODUIT(int $LONGPRODUIT): static
    {
        $this->LONGPRODUIT = $LONGPRODUIT;

        return $this;
    }

    public function getPDSPRODUIT(): ?int
    {
        return $this->PDSPRODUIT;
    }

    public function setPDSPRODUIT(int $PDSPRODUIT): static
    {
        $this->PDSPRODUIT = $PDSPRODUIT;

        return $this;
    }
}
