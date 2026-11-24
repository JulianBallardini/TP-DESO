package com.capitalhumano.modelo;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data 
@Entity 
@Table(name = "cuestionario")
public class Cuestionario {

    public enum EstadoCuestionario {
        ACTIVO,
        EN_PROCESO,
        COMPLETO,
        INCOMPLETO,
        SIN_CONTESTAR
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCuestionario;

    @Column 
    private String clave;
    
    @Enumerated(EnumType.STRING)
    @Column 
    private EstadoCuestionario estado;

    @Column 
    private Date fechaHoraInicio;

    @Column 
    private Date fechaHoraFin;

    @Column
    private Date fechaHoraUltimoIngreso;

    @Column 
    private int cantidadAccesos;

    @Column 
    private int maximoAccesos;

    @Column 
    private int tiempoMaximo;

    // Relaciones
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "cuestionario_id", nullable = false)
    private List<BloquePreguntas> bloques = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "cuestionario_id", nullable = false)
    private List<ResultadoFactor> resultadosFactores = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "cuestionario_id", nullable = false)
    private List<ResultadoCompetencia> resultadosCompetencias = new ArrayList<>();
}
