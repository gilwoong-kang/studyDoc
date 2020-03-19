<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:mpeg7="urn:mpeg:mpeg7:schema:2004">
    <xsl:output method="html" encoding="UTF-16" indent="yes"/> 
        <xsl:template match="/">
            <html>  
                <head> 
                    <title>CNN NEWS</title> 
                </head>
                <body> 
                    <h1>CNN NEWS</h1>
                    <br/>
                    <xsl:apply-templates select="mpeg7:Mpeg7/mpeg7:Description/mpeg7:Summarization/mpeg7:Summary/mpeg7:SummarySegmentGroup"/>
                    <h5>
                        Total : <xsl:value-of select="count(//mpeg7:SummarySegmentGroup[boolean(mpeg7:Name)])"/>
                    </h5>
            </body> 
            </html> 
        </xsl:template>
        <xsl:template match="mpeg7:SummarySegmentGroup">
                <xsl:variable name="name" select="mpeg7:Name"/>
                <xsl:if test="boolean($name)">
                    <xsl:variable name="id" select="@id"/>
                    <h5>
                    <xsl:choose>
                        <xsl:when test="@level = 1">
                            &#x2003;&#x2003;
                            <xsl:value-of select="position()"/>.&#160;
                        </xsl:when>
                        <xsl:when test="@level = 2">
                            &#x2003;&#x2003;&#x2003;&#x2003;
                            <xsl:for-each select="../../mpeg7:SummarySegmentGroup">
                                <xsl:if test="*/@id = $id">
                                    <xsl:value-of select="position()"/>.
                                </xsl:if>
                            </xsl:for-each>
                            <xsl:value-of select="position()"/>&#160;
                        </xsl:when>
                    </xsl:choose>
                        <xsl:value-of select="mpeg7:Name"/>
                        (<xsl:value-of select="replace(substring(@duration,3,9),'000','')"/>)</h5>
                        <xsl:apply-templates select="mpeg7:SummarySegmentGroup"/>
                </xsl:if>
        </xsl:template>
</xsl:stylesheet>