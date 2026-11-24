package com.capitalhumano.modelo;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data 
@Entity 
@Table(name = "factor")
public class Factor {

    @Id 
    private String codigo;

    @Column 
    private String nombre;

    @Column 
    private String descripcion;

    @Column 
    private int nroOrden;

    @Column 
    private boolean activo;

    // Relaciones
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "competencia_id", nullable = false)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Competencia competencia;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "factor_id", nullable = false)
    private List<Pregunta> preguntas = new ArrayList<>();
}
