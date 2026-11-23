package com.capitalhumano.modelo;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data 
@Entity 
@Table (name = "opcion_respuesta")
public class OpcionRespuesta {

    @Id 
    @GeneratedValue (strategy = GenerationType.UUID)
    private UUID id;

    @Column 
    private String nombre;

    @Column 
    private String descripcion;

    @Column 
    private  boolean activo;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "opcion_respuesta_id", nullable = false)
    @Size(min = 2)
    private List<ItemOpcionRespuesta> items = new ArrayList<>();

}
