package com.capitalhumano.modelo;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data 
@Entity 
@Table(name = "pregunta")
public class Pregunta {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPregunta;

    @Column 
    private String nombre;

    @Column 
    private String textoPregunta;

    @Column 
    private String descripcion;

    @Column 
    private boolean activo;

    // Relaciones
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "opcion_respuesta_id", nullable = false)
    private OpcionRespuesta opcionRespuesta;

    @OneToMany(mappedBy = "pregunta", cascade = CascadeType.ALL, orphanRemoval = true)
    @Size(min = 2)
    private List<OpcionPregunta> opcionesPregunta = new ArrayList<>();
}
