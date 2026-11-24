package com.capitalhumano.dao;

import java.util.Optional;

import com.capitalhumano.modelo.Cuestionario;
import com.capitalhumano.modelo.Candidato.TipoDocumento;

public interface ICuestionarioDao {

    public void guardar(Cuestionario cuestionario);

    public void actualizar(Cuestionario cuestionario);

    public Optional<Cuestionario> findById(Long id);

    public Optional<Cuestionario> buscarActivoPorCandidato(Long idCandidato);

    public Optional<Cuestionario> buscarPorClaveYDoc(TipoDocumento tipoDocumento, String nro, String clave);

    public Optional<Cuestionario[]> listarVencidos();

    public Optional<Cuestionario[]> listarPorPuestoYEvaluacion(String codigoPuesto, Long idEvaluacion);

}
